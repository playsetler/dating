<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'category',
        'sex',
        'birthday',
        'photos',
        'look_for',
        'life_motto',
        'nationality',
        'relationship_status',
        'horoscope',
        'height',
        'job_position',
        'month_salary',
        'annual_salary',
        'income_salary',
        'educational_organisation',
        'smoking',
        'alcohol',
        'animals',
        'religion',
        'orientation',
        'education_degree',
        'family_plans',
        'hometown',
        'political_views',
        'languages',
        'children',
        'instagram'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'photos' => 'array',
        'birthday' => 'datetime',
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
