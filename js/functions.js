
    document.getElementById('submit').onclick = function(){
        var numbers = document.getElementsByClassName('number');
        var sum = 0;

        for (var i = 0; i < numbers.length; i++) {
            sum += +numbers[i].value;
        }

        document.getElementById('result').innerHTML = "Привіт, сума двох чисел: "+sum;
    };
