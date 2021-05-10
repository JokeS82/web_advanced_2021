window.onload = function() {
    oefening8();

    function oefening1() {
        let opleiding = ['opleiding1', 'opleiding2', 'opleiding3', 'opleiding4'];
        console.log(opleiding.length);
    }

    function oefening2() {
        let opleiding = ['opleiding1', 'opleiding2', 'opleiding3', 'opleiding4'];
        opleiding.push('multimedia', 'communicatie');
        console.log(opleiding, opleiding.length);
    }

    function oefening3() {
        let opleiding = ['opleiding1', 'opleiding2', 'opleiding3', 'opleiding4'];
        console.log(opleiding.join('\n'));
    }

    function oefening_extra() {
        let opleiding = ['opleiding1', 'opleiding2', 'opleiding3', 'opleiding4'];
        for (let i = 0; i < opleidingen.length; i++) {
            console.log(opleiding[i]);
        }
    }

    function oefening4() {
        const hondenrassen = ['Golden retriever', 'Franse bulldog', 'Duitse herder', 'Dashond', 'Chihuahua', 'Engelse bulldog', 'Stafford', 'Border collie', 'Boxer', 'Maltezer'];

        let random = prompt('Geef een willekeurig getal tussen 1 en 10')
        if (random >= 1 || random <= 10) {
            document.getElementById(hondenrassen[parseInt(random - 1)]).innerHTML;
        } else {
            alert("Sorry, katten niet toegelaten");
        }
    }

    function oefening5() {
        let hondenrassen = ['Golden retriever', 'Franse bulldog', 'Duitse herder', 'Dashond', 'Chihuahua', 'Engelse bulldog', 'Stafford', 'Border collie', 'Boxer', 'Maltezer'];
        hondenrassen.unshift('Mops', 'Beagle', 'Basset', 'Cockerspaniël', 'Bull terrier');
        console.log(hondenrassen);
    }

    function oefening6() {
        let hondenrassen = ['Golden retriever', 'Franse bulldog', 'Duitse herder', 'Dashond', 'Chihuahua', 'Engelse bulldog', 'Stafford', 'Border collie', 'Boxer', 'Maltezer'];
        hondenrassen.unshift('Mops', 'Beagle', 'Basset', 'Cockerspaniël', 'Bull terrier');
        hondenrassen.pop();
        hondenrassen.shift();
        console.log(hondenrassen);
        document.getElementById('honden').innerHTML = hondenrassen;

    }

    function oefening7() {

        var array1 = ['kat', 'hond', 'kip', 'konijn'];
        var removed1 = array1.splice(1, array1.length - 1);
        console.log('Original Array 1: ', array1)// arr is ['kat']
        console.log('Removed Elements: ', removed1)// removed is ['hond', 'kip', 'konijn']

        var array2 = ['banaan', 'appel', 'peer', 'druif'];
        var removed2 = array2.splice(1, array2.length - 1, 'mango', 'meloen', 'aardbei');
        console.log('Original Array2: ', array2)// arr is ['banaan', 'mango', 'meloen', 'aardbei']
        console.log('Removed Elements: ', removed2)// removed is ['appel', 'peer', 'druif']

        var array3 = ['rood', 'geel', 'groen', 'blauw'];
        var removed3 = array3.splice(2, 0, 'paars', 'oranje');
        console.log('Original Array: ', array3)// arr is ['rood', 'geel', 'paars', 'oranje', 'groen', 'blauw']
        console.log('Removed Elements: ', removed3)// removed is []

        var array4 = ['1', '2', '3', '4', '5', '6'];
        index = 3
        var removed4 = array4.splice(index);
        console.log('Original Array: ', array4)// arr is ['1', '2', '3']
        console.log('Removed Elements: ', removed4)// removed is ['4', '5', '6']
    }

    function oefening8() {
        var today = new Date();
        currentMonth = today.getMonth();
        currentYear = today.getFullYear();
        numberOfDays = new Date(currentYear, currentMonth, 0).getDate();
        for (i = 0; i < numberOfDays; i++) {
            console.log(i + '/' + currentMonth + '/' + currentYear)
        }

    }

    function oefening9() {
        var weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var today = new Date();
        currentMonth = today.getMonth();
        currentYear = today.getFullYear();
        numberOfDays = new Date(currentYear, currentMonth+1, 0).getDate();
        let firstDay = new Date(currentYear, currentMonth, 1).getDay();

        //manier 1
        for (let i = 1; i < numberOfDays; i++) {
            if (firstDay > 6){
                firstDay = 0;
            }
            console.log(weekDay[firstDay] + i + '/' + currentMonth + '/' + currentYear);
            firstDay += 1;

        }
        //manier 2
        /*for (let i = 0; i < numberOfDays; i++) {
            console.log(weekDay[(firstDay + i) % 7] + (i + 1) + '/' + currentMonth + '/' + currentYear);
        }*/

    }
}

