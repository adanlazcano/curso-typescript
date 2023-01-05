(() => {
 const batman :string = 'batm\u00E1n'
 const lantern :string = `Lantern: green`

 console.log(`I'm ${batman}`)

 console.log(batman.charAt(0).toUpperCase() + batman.slice(1))
 console.log(batman[10]?.toUpperCase()|| "Doesn't exist")
})();
