// When the bun process starts, it populates all the environment variables in 
// Bun.env object that’s present in the Bun namespace. The Bun.env is a simple/plain JS object.

console.log('Total envs:', Object.keys(Bun.env).length);
console.log('All envs:', Bun.env);
console.log('OS temporary directory:', Bun.env.TMPDIR);
console.log('User name:', Bun.env.LOGNAME);


// Total envs: 36
// All envs: { NVM_INC: ..... <content-too-long>
// OS temporary directory: /var/folders/hx/0f6tcxq52f396vfq0c8xfszc0000gn/T/
// User name: mayankc
