<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Upload extends Model
{
    protected $table = 'images';
    protected $primaryKey = 'id';
    protected $fillable = ['name', 'image_name'];
    use HasFactory;
}
