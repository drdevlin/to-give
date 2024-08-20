<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

class TodoController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'recipient' => 'required|string|max:30',
            'amount' => 'required|string|max:30',
        ]);
        $validated["completed"] = false;
 
        $request->user()->todos()->create($validated);
 
        return redirect('/');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Todo $todo): RedirectResponse
    { 
        $validated = $request->validate([
            'recipient' => 'string',
            'amount' => 'string',
            'completed' => 'boolean',
        ]);
 
        $todo->update($validated);
 
        return redirect('/');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Todo $todo): RedirectResponse
    {
        $todo->delete();

        return redirect('/');
    }
}
