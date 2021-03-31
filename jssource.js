let _clicked /* resolve-function reference */

async function choose (a, b) {
  // Set buttons
  document.getElementById('option1').innerText = a
  document.getElementById('option2').innerText = b

  let choice

  const promise = new Promise((resolve) => { _clicked = resolve }) // eslint-disable-line no-unused-vars

  await promise.then(result => { choice = result })

  return (String(choice) === String(a))
}

async function sort () { // eslint-disable-line no-unused-vars
  const input = document.getElementById('input').value

  // Remove blank lines
  const toSort = input.split('\n').filter(Boolean)

  insertionSort(toSort).then(e => {
    document.write('Result:\n' + e + '\n To use again, refresh')
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
