<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Requests\UserRequest;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Profile;
use App\Services\ResponseService;

class UserController extends Controller
{
    public function get() {
        $user = Auth::user();
        $profile = Profile::where('user_id', $user->id)-> first();

        return ResponseService::sendJsonResponse(true, 200, [], ['user' => $user, 'profile' => $profile]);
    }

    public function update(UserRequest $request) {
        $user = Auth::user();
        $profile = $user->profile;
        $fields = $request->all();

        foreach($fields as $key => $value) {
            if(isset($user->$key)) $user->$key = $value;
            if(isset($profile->$key)) $profile->$key = $value;
        }

        $user->save();
        $user->profile()->save($profile);

        return ResponseService::sendJsonResponse(true, 200);
    }

    public function delete() {
        $user = Auth::user();
        $user->delete();
        User::truncate();
    }
}