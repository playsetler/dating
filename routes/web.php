<?php

use Illuminate\Support\Facades\Route;

Auth::routes();

Route::get('{catchall}', [App\Http\Controllers\AppController::class, 'index'])->where('catchall', '.*');

Route::get('/cache-clear', function () {
    Artisan::call('cache:clear');
    Artisan::call('route:cache');
    Artisan::call('view:clear');
    Artisan::call('config:cache');
    Cache::flush();
    return "Cache is cleared";
});