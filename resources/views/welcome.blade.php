<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Laravel</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body class="antialiased">
    <div class="bg-no-repeat bg-center h-screen" style="background-image: url('/img/portal-morty-smith-rick.png')"
        id="app">
        <div class="bg-black opacity-70 text-white h-full w-full flex items-center justify-center flex-col gap-4">
            <img src="{{ asset('/img/Horizontal (4) 1.png') }}" alt="" srcset="">
            <img src="{{ asset('/img/rick and morty.png') }}" alt="" srcset="" class="w-1/3">
            <span class="text-4xl text-center select-none">
                Bienvenido a Rick and Morty
            </span>
            <p class="text-xl w-1/2 text-center select-none">
                En esta prueba, evaluaremos su capacidad para construir la aplicación mediante el análisis de código y
                la
                reproducción del siguiente diseño.
            </p>
            <link-component url="/home">
                continuar
            </link-component>
        </div>
    </div>
</body>
<button></button>

<script src="{{ asset('/js/app.js') }}"></script>

</html>
