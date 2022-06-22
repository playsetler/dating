<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->string('category');
            $table->string('sex');
            $table->timestamp('birthday');
            $table->string('photos');
            $table->string('phone');
            $table->boolean('is_verified')->default(0);
            $table->boolean('is_notifications_allowed')->default(0);
            $table->boolean('is_profile_hidden')->default(0);
            $table->boolean('is_invisible')->default(0);
            $table->boolean('is_verification_hidden')->default(0);
            $table->string('about_me')->nullable();
            $table->string('look_for')->nullable();
            $table->string('life_motto')->nullable();
            $table->string('nationality')->nullable();
            $table->string('relationship_status')->nullable();
            $table->string('horoscope')->nullable();
            $table->string('height')->nullable();
            $table->string('job_position')->nullable();
            $table->string('month_salary')->nullable();
            $table->string('annual_salary')->nullable();
            $table->string('income_salary')->nullable();
            $table->string('educational_organisation')->nullable();
            $table->string('smoking')->nullable();
            $table->string('alcohol')->nullable();
            $table->string('animals')->nullable();
            $table->string('religion')->nullable();
            $table->string('orientation')->nullable();
            $table->string('education_degree')->nullable();
            $table->string('family_plans')->nullable();
            $table->string('hometown')->nullable();
            $table->string('political_views')->nullable();
            $table->string('languages')->nullable();
            $table->string('children')->nullable();
            $table->string('instagram')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
};
