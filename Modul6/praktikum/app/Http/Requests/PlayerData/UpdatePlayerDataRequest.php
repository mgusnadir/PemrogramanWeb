<?php

namespace App\Http\Requests\PlayerData;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePlayerDataRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // Misalnya, Anda dapat menentukan logika otorisasi di sini
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'age' => 'required|integer|min:0',
        ];
    }
}
