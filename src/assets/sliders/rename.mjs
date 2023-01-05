import fs from 'node:fs'

const readdir = './'
console.log()
const imageNames = []
for (const name of await fs.promises.readdir(readdir)) {
  if (name.includes('.png')) imageNames.push(name)
}

for (const imageIndex in imageNames) {
  const oldName = imageNames[imageIndex]
  const newName = `${imageIndex}.png`
  console.log(oldName, '|', newName)
  await fs.promises.rename(imageNames[imageIndex], newName)
}
