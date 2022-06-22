<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;

Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'user'], function() {
    Route::get('/', [UserController::class, 'get']);
    Route::get('/delete', [UserController::class, 'delete']);
    Route::get('/update', [UserController::class, 'update']);
});

Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'profiles'], function() {
    Route::get('/{id?}', [ProfileController::class, 'get']);
});