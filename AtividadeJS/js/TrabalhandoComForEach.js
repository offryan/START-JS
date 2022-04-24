function TrocarCores() {

    let cores = ['red', 'blue', 'green', 'yellow', 'pink', 'cyan'];
   

    cores.forEach(function (cor, i) {

        setTimeout(() => {

            document.body.style.backgroundColor = cor;

        }, i * 1000);

    });


}