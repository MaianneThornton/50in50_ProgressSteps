const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
  currentActive++

  // Keeping within the boundaries
  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  update()
})

prev.addEventListener('click', () => {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }
  update()
})

// function to highlight circles when active
function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')

  // adds functionality to the line when active by selecting the progress width (style.css) & updating the percentage by converting the lengths of the active and circles node lists to a percentage
  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  // button status switch from active to disabled
  if (currentActive == 1) {
    prev.disabled = true
  } else if (currentActive == circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}