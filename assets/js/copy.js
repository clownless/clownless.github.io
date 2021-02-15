function copyds()
{
    navigator.clipboard.writeText('clownless#8160')
  .then(() => {
    alert("Copied to clipboard!")
  })
  .catch(err => {
    console.log('Something went wrong', err);
  });
}
