# Docker | Playwright
# https://playwright.dev/docs/docker
# ARG IMAGE=mcr.microsoft.com/playwright:bionic
ARG IMAGE=mcr.microsoft.com/playwright:focal

FROM ${IMAGE}

ARG WORK_DIR="./"
RUN mkdir -p ${WORK_DIR}

WORKDIR ${WORK_DIR}
COPY . ${WORK_DIR}

RUN npx playwright install 

RUN npm i -D playwright

RUN npm ci 


