import childProcess from "node:child_process";

function getOriginUrl (originName: string): URL {
  const stdout: string = childProcess.execSync(
    `git remote get-url ${ originName }`,
    {
      encoding: "utf-8"
    }
  );

  return new URL(stdout.trim());
}

export {
  getOriginUrl
};
