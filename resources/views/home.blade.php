<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Laravel</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body class="antialiased">
    <main id="app">
        <header class="relative">
            <img src="{{ asset('/img/baner.png') }}" alt="" srcset="">
            <div class="absolute top-0 left-0 h-full w-full">
                <div
                    class="bg-black opacity-80 text-white h-full w-full flex items-center justify-center flex-col gap-4">
                    <img src="{{ asset('/img/rick and morty.png') }}" alt="" srcset="" class="w-1/4">
                    <search-component v-model="search"></search-component>
                </div>
            </div>
        </header>
        <navigation-component v-on:gender="genderSelected"></navigation-component>
        <favourite-component v-on:favstatus="showFavorites" :status="show"></favourite-component>
        <panel-component v-bind:list="list" v-on:clear="clear" v-on:newfav="addfav" v-on:viewmodal="modal">
        </panel-component>
        <modal-component :status="modalData.status" :id="modalData.id" v-on:closemodal="close"
            v-on:viewmodal="modal"></modal-component>
    </main>
</body>

<script src="{{ asset('/js/app.js') }}"></script>

</html>
