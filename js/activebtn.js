/*
  |==============================
  | Скрипт для переключения класса активной кнопки фильтра
  |==============================
*/
{
  // Обращение к фильтру портфолио через селектор
  var btnContainer = document.querySelector('.filter');

  // Все элементы фильтра с указанным селектором 
  var btns = btnContainer.querySelectorAll('.filter__btn');

  // Добавление класса в активную кнопку и удаление из неактивной
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
      var now = document.getElementsByClassName('filter__btn--active');
      now[0].className = now[0].className.replace(' filter__btn--active', '');
      this.className += ' filter__btn--active';
    });
  }
}


/*
  |==============================
  | Исходный вид скрипта из источника
  |==============================
*/
// var btnContainer = document.getElementById("myDIV");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }