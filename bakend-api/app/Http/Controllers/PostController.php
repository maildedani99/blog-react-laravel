<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class PostController extends Controller
{

    public function all()
    {
        Log::info('Retrieving all POSTS');
        $post = Post::orderBy('created_at', 'desc')->get();
        return response()->json($post);
    }

    public function create(Request $request)
    {
        $post = Post::create([
            'title' => $request->title,
            'description' => $request->description,
            'content' => $request->content,
        ]);
        return response()->json($post);
    }



}
