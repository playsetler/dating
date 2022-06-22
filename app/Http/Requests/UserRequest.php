<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'nullable|email',
            'name' => 'nullable|string',
            'target' => 'nullable|string',
            'sex' => 'nullable|string',
            'date_of_birth' => 'nullable|datetime',
            'photos' => 'nullable|string'
        ];
    }
}
