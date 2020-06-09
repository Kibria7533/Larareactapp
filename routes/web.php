<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/getdata','reactcrud@show');
Route::post('/store','reactcrud@store');
Route::delete('/delete/{id}','reactcrud@delete');
Route::get('/getdata/edit/{id}','reactcrud@edit');
Route::post('/update','reactcrud@update');

