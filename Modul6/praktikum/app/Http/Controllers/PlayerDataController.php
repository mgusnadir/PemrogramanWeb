<?php

namespace App\Http\Controllers;

use App\Http\Requests\PlayerData\StorePlayerDataRequest;
use App\Http\Requests\PlayerData\UpdatePlayerDataRequest;
use App\Http\Resources\PlayerData\PlayerDataCollection;
use App\Http\Resources\PlayerData\PlayerDataResource;
use App\Models\PlayerData;
use Exception;
use Illuminate\Http\Request;

class PlayerDataController extends Controller
{
    protected $playerData;

    public function __construct(PlayerData $playerData)
    {
        $this->playerData = $playerData;
    }

    private function jsonResponse($message, $data = null, $statusCode = 200)
    {
        return response()->json([
            'message' => $message,
            'data'    => $data,
        ], $statusCode);
    }

    public function index()
    {
        try {
            $queryData = $this->playerData->all();
            $formattedDatas = new PlayerDataCollection($queryData);

            return $this->jsonResponse('success', $formattedDatas);
        } catch (Exception $e) {
            return $this->jsonResponse($e->getMessage(), null, 400);
        }
    }

    public function store(StorePlayerDataRequest $request)
    {
        $validatedRequest = $request->validated();

        try {
            $queryData = $this->playerData->create($validatedRequest);
            $formattedDatas = new PlayerDataResource($queryData);

            return $this->jsonResponse('success', $formattedDatas);
        } catch (Exception $e) {
            return $this->jsonResponse($e->getMessage(), null, 400);
        }
    }

    public function show(string $id)
    {
        try {
            $queryData = $this->playerData->findOrFail($id);
            $formattedDatas = new PlayerDataResource($queryData);

            return $this->jsonResponse('success', $formattedDatas);
        } catch (Exception $e) {
            return $this->jsonResponse($e->getMessage(), null, 400);
        }
    }

    public function update(UpdatePlayerDataRequest $request, string $id)
    {
        $validatedRequest = $request->validated();

        try {
            $queryData = $this->playerData->findOrFail($id);
            $queryData->update($validatedRequest);
            $queryData->save();
            $formattedDatas = new PlayerDataResource($queryData);

            return $this->jsonResponse('success', $formattedDatas);
        } catch (Exception $e) {
            return $this->jsonResponse($e->getMessage(), null, 400);
        }
    }

    public function destroy(string $id)
    {
        try {
            $queryData = $this->playerData->findOrFail($id);
            $queryData->delete();
            $formattedDatas = new PlayerDataResource($queryData);

            return $this->jsonResponse('success', $formattedDatas);
        } catch (Exception $e) {
            return $this->jsonResponse($e->getMessage(), null, 400);
        }
    }
}
