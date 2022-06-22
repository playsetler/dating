<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Profile;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory(10)
            ->has(Profile::factory(), 'profile')
            ->create();

        DB::table('users')->insert([
            'name' => 'Roman',
            'email' => 'test@mail.com',
            'password' => Hash::make('12345678'),
        ]);
    }
}
