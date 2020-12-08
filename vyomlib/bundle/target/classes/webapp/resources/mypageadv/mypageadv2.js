// Full documentation: https://github.com/depthdev/flagstonejs

const fs = flagstone(document.getElementsByTagName('article')[0], {
  //bedPadding: 10, // The padding around the area edge
  //stonesMargin: 10, // Margin between stones in pixels (as an int)
  margin: 10, // This overrides bedPadding & stonesMargin and is equivalent to setting them both to this value
  minWidth: 280, // Minimum width you want an element to be in pixels (as an int)
  maxColumns: 5, // Maximum number of columns to display (as an int)
  flow: true, // Allows stone widths to flow during a resize event
  direction: 'left', // Alternative is "right"; the default is "left"; and for top to bottom, use CSS's built in Columns or Flexbox
  assignReverseZIndexes: false,
  random: false, // Display stones in a random order; the default is false (as a boolean)
  square: false, // Makes each flagstone square; default is false
  space: false, // Spaces out stones randomly (as a boolean)
  spaceFrequency: 0.4, // Adjusts the frequency of the amount of spaces (as a float 0.0 - 1.0); default is 0.4
  animationDuration: 1000, // Animation duration (milliseconds as an int); default is 0
  animationTimingFunction: 'ease', // CSS animation timing function as a string
  heightAnimationDuration: 2500,
  heightAnimationTimingFunction: 'ease',
  resizeDelay: 250, // Delay to run resize/reset function after resizing the window in milliseconds (as an int); default is 250
  dragAndDrop: true,
  dragAndDropAutoDelay: 1000,
  dropCallback: function(dragElem, targetElem) {
    // console.log(dragElem);
    // console.log(targetElem);
    return true;
  },
  eventResetDelay: 250,
  eventResizeHeightDuration: 250,
  callback: function(elem, index) { // Warning! This gets called every soft reset, so if you're attaching listeners, you'll need to remove the listeners first!
    if (index === 3) {
      elem.classList.add('highlight');
    } else {
      elem.classList.remove('highlight');
    }
  }, // Callback function for each element with index and element arguments
  watch: true,
  watchAll: true,
  watchImages: true
});












/* DEMO-ONLY FUNCTIONS */

function adjust() {
  const $ = function(s){return document.getElementById(s);};
  fs.adjust({
    //margin: 10,
    bedPadding: window.parseInt($('adjust-bed-padding').value,10),
    stonesMargin: window.parseInt($('adjust-stones-margin').value,10),
    minWidth: window.parseInt($('adjust-min-width').value,10),
    maxColumns: window.parseInt($('adjust-max-columns').value,10),
    dragAndDrop: $('adjust-drag-and-drop').checked,
    dropCallback: window.eval('(' + $('adjust-drop-callback').value + ')'),
    callback: window.eval('(' + $('adjust-callback').value + ')')
  });
}

function toggleMore(e) {
  const p = e.target.parentElement.getElementsByClassName('p-animate')[0];
  if (p.classList.contains('active')) {
    p.classList.remove('active');
  } else {
    p.classList.add('active');
  }
}

function toggleWidget(e) {
  const container = e.currentTarget.parentElement;
  if (container.classList.contains('active')) {
    container.classList.remove('active');
  } else {
    container.classList.add('active');
  }    
}

function addCard() {
  const section = document.createElement('section');
  section.classList.add('flagstone-drag-handle');
  section.innerHTML = '<h2>New Card</h2><button class="flagstone-remove">&#215;</button><p>Lorem ipsum dolor sit amet. Hic cupiditate sapiente placeat temporibus, placeat temporibus, fugiat eos.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit tempora itaque maxime, enim, nam quas nobis voluptate, minus ex adipisci aperiam provident sequi soluta. Praesentium et, placeat porro dolorum voluptate.</p>';
  document.getElementsByTagName('article')[0].appendChild(section);
}

Array.prototype.slice.call(document.getElementsByClassName('toggle-more')).forEach(function(e) {
  e.addEventListener('click', toggleMore);
});

document.getElementsByClassName('toggle-widget')[0].addEventListener('click', toggleWidget);

document.getElementsByClassName('apply-adjustments')[0].addEventListener('click', adjust);

document.getElementsByClassName('add-card')[0].addEventListener('click', addCard);

window.setTimeout(function() {
  document.getElementById('change-my-source').src = 'http://placebear.com/400/400';
}, 3000);
