module.exports = {
    apps: [
     {
        name: "api.odai", // change to your subdomain name
        //   exec_mode: "cluster",
        //   instances: "max", // Or a number of instances
        script: "./server.js",
        args: "start",
      },
    ],
  };