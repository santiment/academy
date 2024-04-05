{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs
    pkgs.yarn
  ];
  NODE_OPTIONS="--openssl-legacy-provider";

  shellHook = ''
    echo "Ready to code! You can start the app with 'yarn start'."
  '';
}
