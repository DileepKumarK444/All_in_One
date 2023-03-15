<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Request;
use App\Models\Upload;
use Symfony\Component\HttpFoundation\Response;

class UploadController extends Controller
{
    public function get_all()
    {
        $res = Upload::all();
        return response()->json(($res));
    }
    // //
    public function upload(Request $request)
    {

        // $this->validate($request, [
        //     'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
        // ]);
        // $image_path = $request->file('image')->store('image', 'public');

        // $data = Upload::create([
        //     'image_name' => $image_path,
        // ]);

        // return response($data, Response::HTTP_CREATED);

        $file =  $request->file('image');
        $file_name = time() . '.' . $file->extension();
        $file_path = public_path() . '/uploads/';

        $file->move($file_path, $file_name);
        // $data = Upload::create([
        //     'image_name' => $file_name,
        // ]);

        $employee = new Upload([
            'image_name' => $file_name,
            'name' => 'Dileep'
        ]);

        $employee->save();

        return response()->json([
            'filename' => $file_name,
            'ss' => $employee
            // 'file_path' => $file_path
        ]);
    }
}
