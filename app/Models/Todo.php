<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    use HasFactory;

    protected $fillable = [
        'recipient',
        'amount',
        'completed',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
