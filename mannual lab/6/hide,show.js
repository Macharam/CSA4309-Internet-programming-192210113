<html>
<img id="image" src="image.jpg" style="display:none;">
<button onclick="showImage()">Show</button>
<button onclick="hideImage()">Hide</button>
<!-- JavaScript -->
<script>
  function showImage() {
    document.getElementById("image").style.display = "block";
  }

  function hideImage() {
    document.getElementById("image").style.display = "none";
  }
</script>
</html>
