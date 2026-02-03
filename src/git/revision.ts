import childProcess from "node:child_process";

function getRevisitionHash (): string {
  const stdout: string = childProcess.execSync("git log -1 --pretty=format:%H", {
    encoding: "utf-8"
  });

  return stdout.trim();
}

export {
  getRevisitionHash
};
