# PPML Website

This uses Github Pages and is available on https://crypto-ppml.github.io

## Redirect the main page to the current year

Add in the frontmatter of the correct page (e.g., `2020/index.markdown`):
```
redirect_from: "/"
```

## Testing locally

### Pre-requisite

You need to install Jekyll (https://jekyllrb.com/docs/)

On macOS with HomeBrew:

1. Install Ruby via rbenv
```
brew update
brew install rbenv ruby-build
rbenv install -l
rbenv install 2.7.1
rbenv global 2.7.1
```
(replace 2.7.1 by the latest version displayed by `rbenv inctall -l`)
2. Add the following to `~/.bashrc` or `~/.zshrc` to load `rbenv`:
```
# rbenv
if command -v rbenv >/dev/null 2>&1
then 
    eval "$(rbenv init -)"
fi
```
3. Restart the terminal
4. Install `jekyll`:
```
gem install jekyll bundler
```

### Testing

Run:

```
bundle exec jekyll serve
```

