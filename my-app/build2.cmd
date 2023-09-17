# those files are neede to fetch nodemodules
copy package.json build
copy package-lock.json build

echo fetch node modules
cd build
npm ci