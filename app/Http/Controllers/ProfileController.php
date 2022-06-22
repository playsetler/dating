<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileRequest;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\Profile;

class ProfileController extends Controller
{
    public function get(ProfileRequest $request, Profile $profile) {
        if(!empty($profile)) {
            return ResponseService::sendJsonResponse(true, 200, [], ['profile' => Profile::where('id', $user-> id)-> first()]);
        } else {
            return ResponseService::sendJsonResponse(true, 200, [], ['profile' => Profile::where('id', $user-> id)-> first()]);
        }
    }
}