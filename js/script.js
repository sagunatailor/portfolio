// TABS //
function openBrand(evt, brandName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(brandName).style.display = 'block';
  evt.currentTarget.className += ' active';
}
document.getElementById('defaultOpen').click();

//  READ MORE / LESS //
function myFunction() {
  var moreText = document.getElementById('more');
  var btnText = document.getElementById('myBtn');

  if (moreText.style.display === 'none') {
    btnText.innerHTML = 'Read less';
    moreText.style.display = 'inline';
  } else {
    btnText.innerHTML = 'Read more';
    moreText.style.display = 'none';
  }
}

// MODAL //
document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.tabcontent img');
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalClose = document.querySelector('.modal-close');

  images.forEach((image) => {
    image.addEventListener('click', function () {
      modal.style.display = 'block';
      modalImage.src = this.src;
    });
  });

  modalClose.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
