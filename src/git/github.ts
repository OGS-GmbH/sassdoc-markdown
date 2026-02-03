import path from "node:path";

const GITHUB_BASE_URL: URL = new URL("https://github.com");
const GITHUB_URL_SUFFIX: string = "blob";

type GetRepositoryUrlResult = {
  owner: string;
  repository: string;
};

function getRepositoryUrl (url: URL): GetRepositoryUrlResult {
  const pathNameParts: string[] = url.pathname.split("/");

  return {
    /* eslint-disable @tseslint/no-non-null-assertion */
    owner: pathNameParts[ 1 ]!,
    repository: pathNameParts[ 2 ]!.split(".")[ 0 ]!
    /* eslint-enable @tseslint/no-non-null-assertion */
  };
}

type GetRepositoryViewUrlData = {
  owner: string;
  repository: string;
};

function getRepositoryViewUrl (data: GetRepositoryViewUrlData): URL {
  GITHUB_BASE_URL.pathname = path.join(data.owner, data.repository, GITHUB_URL_SUFFIX);

  return GITHUB_BASE_URL;
}

export type {
  GetRepositoryViewUrlData,
  GetRepositoryUrlResult
};
export {
  getRepositoryViewUrl,
  getRepositoryUrl
};
