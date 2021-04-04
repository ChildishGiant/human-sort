import * as bulmaToast from 'bulma-toast'

async function choose (a, b) {
  // Set buttons
  document.getElementById('option1').innerText = a
  document.getElementById('option2').innerText = b

  let choice

  const promise = new Promise((resolve) => { window._clicked = resolve })

  await promise.then(result => { choice = result })

  return (String(choice) !== String(a))
}

window.sort = async function () {
  const input = document.getElementById('input').value
  const resultslist = document.getElementById('results-list')

  // Remove blank lines
  let toSort = input.split('\n').filter(line => Boolean(line.trim()))
  // Remove duplicates
  toSort = [...new Set(toSort)]

  // Make sure there's more than one element to sort
  if (toSort.length < 2) {
    // Show error
    bulmaToast.toast({
      message: 'You need more than one thing to sort',
      type: 'is-danger',
      dismissible: true,
      animate: { in: 'fadeInDown', out: 'fadeOutUp' },
      duration: 9999
    })
    // Stop trying to sort
    return
  }

  // Show modal
  document.getElementById('choices').classList.add('is-active')

  insertionSort(toSort).then(results => {
    // Hide choose modal
    document.getElementById('choices').classList.remove('is-active')

    // Clear results
    resultslist.innerHTML = ''

    // Populate results with list items
    results.forEach(function (item) {
      const li = document.createElement('li')
      resultslist.appendChild(li)

      li.innerHTML += item
    })

    // Show results modal
    document.getElementById('results').classList.add('is-active')
  })
}

async function insertionSort (inputArr) {
  const n = inputArr.length
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    const current = inputArr[i]
    // The last element of our sorted subarray
    let j = i - 1
    while ((j > -1) && (await choose(inputArr[j], current))) {
      inputArr[j + 1] = inputArr[j]
      j--
    }
    inputArr[j + 1] = current
  }
  return inputArr
}
