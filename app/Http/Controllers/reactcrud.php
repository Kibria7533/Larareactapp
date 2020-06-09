<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;

class reactcrud extends Controller
{
    public function show(){
        $data=DB::table('reactcrud')->get();
        return $data;
    }
    public function store(Request $request){
       
        $data=DB::table('reactcrud')->insert([
           'name'=>$request->name,
           'email'=>$request->email
        ]);
    }

    public function delete($id){
       
        DB::table('reactcrud')->delete($id);
        
        
    }
    public function edit($id){
       
        $data=DB::table('reactcrud')->where('id',$id)->get();
        return $data;
        
        
    }
    public function update(Request $request){
        $data=DB::table('reactcrud')->where('id',$request->id)->update([
            'name'=>$request->name,
            'email'=>$request->email
         ]);
    }
}
