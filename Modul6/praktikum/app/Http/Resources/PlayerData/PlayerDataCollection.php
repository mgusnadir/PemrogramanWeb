<?php

namespace App\Http\Resources\PlayerData;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class PlayerDataCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection->transform(function ($player) {
                return [
                    'id' => $player->id,
                    'name' => $player->name,
                    'position' => $player->position,
                    'age' => $player->age,
                    'created_at' => $player->created_at->toDateTimeString(),
                    'updated_at' => $player->updated_at->toDateTimeString(),
                ];
            }),
        ];
    }
}
