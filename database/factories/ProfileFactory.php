<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class ProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'photos' => [
                '../assets/img/register/pic1.png',
                '../assets/img/register/pic2.png',
                '../assets/img/register/pic3.png',
                '../assets/img/register/pic4.png'
            ],
            'category' => 'Networking',
            'sex' => 'Man',
            'birthday' => now(),
            'phone' => $this->faker->numerify('###-###-####'),
            'is_verified' => 1,
            'is_notifications_allowed' => 1,
            'is_profile_hidden' => 1,
            'is_invisible' => 1,
            'is_verification_hidden' => 1,
            'about_me' => 'About me'
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'look_for' => null,
                'life_motto' => null,
                'nationality'=> null,
                'relationship_status'=> null,
                'horoscope'=> null,
                'height'=> null,
                'job_position'=> null,
                'month_salary'=> null,
                'annual_salary'=> null,
                'income_salary'=> null,
                'educational_organisation'=> null,
                'smoking'=> null,
                'alcohol'=> null,
                'animals'=> null,
                'religion'=> null,
                'orientation'=> null,
                'education_degree'=> null,
                'family_plans'=> null,
                'hometown'=> null,
                'political_views'=> null,
                'languages'=> null,
                'children'=> null,
                'instagram'=> null
            ];
        });
    }
}
