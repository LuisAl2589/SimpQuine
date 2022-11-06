<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simplificacion Quine McCluskey</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>
</head>
<body>
    <header>
        <br>
        <div class="container text-center">
        <div>
            <h2>Simplificacion Quine McCluskey</h2>
        </div>
        <div>
            <h4>
                García Castañeda Luis Alfonso
            </h4>
        </div>
    </div>
    </header>
    <br><br>     
    <div class="container text-center">
        <button type="button" class="btn btn-primary" onclick="simplificar()">Simplificar</button>
        <br><br>
        <div id="resultado">
            
        </div>
        <table class="table table-bordered border-primary">
        <thead>
            <tr class="table-primary">
                <th>m</th>
                <th>w</th>
                <th>x</th>
                <th>y</th>
                <th>z</th>
                <th>F</th>
            </tr>
        </thead>
        <tbody id="tabla">
            
        </tbody>
      </table>
      
    </div>

    <script src="logica.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</body>
</html>