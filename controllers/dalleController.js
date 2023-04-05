import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-0K8Q2U4yeHyc0sr0oidKHvPn",
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export const createImage = async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = aiResponse.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    res.status(400).send(error?.response.data.error.message);
    console.log(error);
  }
};
