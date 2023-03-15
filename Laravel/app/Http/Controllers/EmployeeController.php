<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Employee;


class EmployeeController extends Controller
{
    public function index()
    {
        $employees = Employee::all();
        return response()->json($employees);
    }

    public function saveEmployee(Request $request)
    {

        if (Employee::where('name', '=', $request->input('name'))->exists()) {
            return response()->json('Name already exist');
        }
        $employee = new Employee([
            'name' => $request->input('name'),
            'address' => $request->input('address'),
            'mobile' => $request->input('mobile'),
        ]);

        $employee->save();
        return response()->json('Employee created');
    }

    public function updateEmployee(Request $request, $id)
    {
        if (Employee::where('name', '=', $request->input('name'))->where('id', '!=',  $id)->exists()) {
            return response()->json('Name already exist');
        }

        $employees = Employee::find($id);
        $employees->update($request->all());

        return response()->json('Employee updated');
    }
}
