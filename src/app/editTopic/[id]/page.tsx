import EditTopicForm from "@/components/EditTopicForm";

interface Topic {
  id: string;
  title: string;
  description: string;
}

interface Params {
  params: {
    id: string;
  };
}

const getTopicById = async (
  id: string
): Promise<{ topic: Topic } | undefined> => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export default async function EditTopic({ params }: Params) {
  const { id } = params;
  const topicData = await getTopicById(id);

  if (!topicData) {
    return <div>Error: Unable to fetch topic data</div>;
  }

  const { topic } = topicData;
  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}
