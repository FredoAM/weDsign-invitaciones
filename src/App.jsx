
import './App.css'
import './css/animate.css'
import './css/bootstrap.min.css'
import './css/magnific-popup.css'
import './css/owl.carousel.min.css'
import './css/owl.theme.default.min.css'
import './css/style.css'
import './css/themify-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import './js/bootstrap.min.js'


function App() {
    // Puedes usar jQuery directamente aquí
    $(document).ready(function() {
      $("h1").css("color", "red");
    });
  
    return (
      <div>
        <h1>¡Hola!</h1>
      </div>
    );
  }
export default App
