import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
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
