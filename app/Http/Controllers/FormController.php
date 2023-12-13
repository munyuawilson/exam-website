<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormController extends Controller
{
    public function submitForm(Request $request)
    {
        // Handle form submission here
        $name = $request->input('name');
        echo $name;

        // Perform authentication or any other processing

        // Redirect or return a response
        return redirect()->route('home');
    }
    //
}
