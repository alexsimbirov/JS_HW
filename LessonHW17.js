let someArray = [1, 2, 3, 4, 5];
someArray.splice(1, 0, "a", "b") && someArray.splice(6, 0, "c") && someArray.splice(8, 0, "e");
alert (someArray);


localStoragePractice.value = localStorage.getItem('localStoragePractice');
localStoragePractice.oninput = () => {
      localStorage.setItem('localStoragePractice', localStoragePractice.value)
};

    