<?php

use App\Http\Controllers\ProductCategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix("exc6")->group(function(){
    Route::apiResource("product-category", ProductCategoryController::class);

    // Route::get("namae", ProductCategoryController::class);
    // Route::post("namae", ProductCategoryController::class);
    // Route::put("namae", ProductCategoryController::class);
    // Route::delete("namae", ProductCategoryController::class);
});