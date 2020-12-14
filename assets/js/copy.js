function copyds()
{
    navigator.clipboard.writeText('clownless#2021')
  .then(() => {
    alert("Copied to clipboard!")
  })
  .catch(err => {
    console.log('Something went wrong', err);
  });
}
