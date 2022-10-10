// Bun also make all the environment variables available in process.env

console.log('Total envs:', Object.keys(process.env).length);
console.log('All envs:', process.env);
console.log('OS temporary directory:', process.env.TMPDIR);
console.log('User name:', process.env.LOGNAME);


// Total envs: 36
// All envs: { NVM_INC: ..... <content-too-long>
// OS temporary directory: /var/folders/hx/0f6tcxq52f396vfq0c8xfszc0000gn/T/
// User name: mayankc
